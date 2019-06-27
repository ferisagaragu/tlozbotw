import React from 'react';

class LifeIndicator {
 
  id: number = 0;

  public heartSymbol(lifes: number[]): any {
    if (lifes.length !== 0) {
      return lifes.map((life: number) => {
        this.id++;
        switch (life) {
          case .25: return <img key={this.id} alt="heart" src="https://firebasestorage.googleapis.com/v0/b/tlozbotw-240a7.appspot.com/o/core%2Flife_1_4.png?alt=media&token=32dfbf4d-7f97-4cd6-b921-71a5155ee986" width="18" height="14"/>;
          case .50: return <img key={this.id} alt="heart" src="https://firebasestorage.googleapis.com/v0/b/tlozbotw-240a7.appspot.com/o/core%2Flife_1_2.png?alt=media&token=016917b3-73b4-42fe-8ba9-e6a4abd13166" width="18" height="14"/>;
          case 1: return <img key={this.id} alt="heart" src="https://firebasestorage.googleapis.com/v0/b/tlozbotw-240a7.appspot.com/o/core%2Flife_1.png?alt=media&token=9e47fbde-a5aa-4b9a-8171-5697c9849c92" width="18" height="14"/>;
          default: return <></>;
        }
      });
    } else {
      return <b>Material</b>;
    }
  }

}

export default LifeIndicator;