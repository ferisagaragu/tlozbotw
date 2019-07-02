import React, { ReactElement } from 'react';
import heart_25 from '../styles/img/heart_25.png';
import heart_50 from '../styles/img/heart_50.png';
import heart from '../styles/img/heart.png';

class LifeIndicator {
 
  id: number = 0;

  private heartHalve(halve: number, htmlOut: Array<ReactElement>): void {
    switch (halve) {
      case 25:
        htmlOut.push( 
          <img 
            key={ this.id } 
            alt="heart" 
            src={ heart_25 } 
            width="18" 
            height="14"
          />
        );
        break;

      case 5:
      case 50: 
        htmlOut.push( 
          <img 
            key={ this.id } 
            alt="heart" 
            src={ heart_50 } 
            width="18" 
            height="14"
          />
        );
        break;
    }
  }

  private heartComplete(complete: number, htmlOut: Array<ReactElement>): void {
    for (let i = 0; i < complete; i++) {
      htmlOut.push(
      <img 
        key={this.id} 
        alt="heart" 
        src={ heart }
        width="18" 
        height="14"
      />);
      this.id++;
    }
  }

  public heartSymbol(lifes: number): Array<ReactElement> {
    const life = String(lifes);
    let htmlOut: Array<ReactElement> = [];

    if (life.includes('.')) {
      let lifeNum = life.split('.');
      this.heartComplete(+lifeNum[0], htmlOut);
      this.heartHalve(+lifeNum[1], htmlOut);
    } else {
      this.heartComplete(lifes, htmlOut);
    }

    return htmlOut;
  }

}

export default LifeIndicator;