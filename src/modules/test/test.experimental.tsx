import React, { Component } from 'react';
import { CircleLoader } from 'react-spinners';
import key from '../../core/key/react-elements.key';

const array: any = [
  {
    "id": "1",
    "second": "0:20"
  },
  {
    "id": "2",
    "second": "0:38"
  },
  {
    "id": "3",
    "second": "1:15"
  },
  {
    "id": "4",
    "second": "1:28"
  },
  {
      "id": "5",
      "second": "1:44"
    },
  {
      "id": "6",
      "second": "1:58"
    },
  {
      "id": "7",
      "second": "2:24"
    },
  {
      "id": "8",
      "second": "2:42"
    },
  {
      "id": "9",
      "second": "3:00"
    },
  {
      "id": "10",
      "second": "3:11"
    },
  {
      "id": "11",
      "second": "3:33"
    },
  {
      "id": "12",
      "second": "4:02"
    },
  {
      "id": "13",
      "second": "4:37"
    },
  {
      "id": "14",
      "second": "4:49"
    },
  {
      "id": "15",
      "second": "5:22"
    },
  {
      "id": "16",
      "second": "5:35"
    },
  {
      "id": "17",
      "second": "5:48"
    },
  {
      "id": "18",
      "second": "6:11"
    },
  {
      "id": "19",
      "second": "6:36"
    }
  ]; 

class TestExperimental extends Component<any,any> {
  
  constructor(props: any) {
    super(props);
    
    let out:any = {};

    array.forEach((element: any) => {
      const id = key();
      element.id = id;
      out[id] = element;
    });

    console.log(JSON.stringify(out));
  }

  render() {

    return (
      <div>
        <CircleLoader
          color={ '#123abc' }
        />
      </div> 
    );
  }
}

export default TestExperimental;