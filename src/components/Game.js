import React from 'react';
import { connect } from 'react-redux';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Sidebar from './Sidebar';
import Hero from './Hero';
import { init } from '../redux/game/actions';
import { SELF, ENEMY } from '../../server/targets';

class Game extends React.PureComponent {
  componentDidMount() {
    this.props.init();
  }

  getUsedPotions(enemy) {
    if (enemy) {
      if (this.props.usedPotions.player1.id === this.props.enemy.id) {
        return this.props.usedPotions.player1.potions || [];
      }
      return this.props.usedPotions.player2.potions || [];
    }
    if (this.props.usedPotions.player1.id === this.props.self.id) {
      return this.props.usedPotions.player1.potions || [];
    }
    return this.props.usedPotions.player2.potions || [];
  }

  getEffects() {
    const enemyEffects = this.getUsedPotions(true).map((el) => {
      return el.effects;
    }).reduce((a, b) => {
      return a.concat(b);
    }, []);

    const enemyOwnEffects = enemyEffects.filter((el) => {
      return el.target === SELF;
    });

    const enemyEnemyEffects = enemyEffects.filter((el) => {
      return el.target === ENEMY;
    });

    const selfEffects = this.getUsedPotions(false).map((el) => {
      return el.effects;
    }).reduce((a, b) => {
      return a.concat(b);
    }, []);

    const selfOwnEffects = selfEffects.filter((el) => {
      return el.target === SELF;
    });

    const selfEnemyEffects = selfEffects.filter((el) => {
      return el.target === ENEMY;
    });

    return {
      enemyEffects: enemyOwnEffects.concat(selfEnemyEffects),
      selfEffects: selfOwnEffects.concat(enemyEnemyEffects),
    };
  }

  render() {
    const shouldMirror = this.props.enemy.id === this.props.self.id ? 'mirror' : '';
    const potions = this.getEffects();
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="game">
          <div className="panel">
            <Hero
              hero={this.props.enemy}
              potions={potions.enemyEffects}
            />
            <div className="hero-separator" />
            <Hero
              hero={this.props.self}
              mirror={shouldMirror}
              displayButton={true}
              potions={potions.selfEffects}
            />
          </div>
          <Sidebar />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default connect((state) => {
  return {
    enemy: state.game.enemy,
    self: state.game.self,
    usedPotions: state.game.usedPotions,
  };
}, { init })(Game);
