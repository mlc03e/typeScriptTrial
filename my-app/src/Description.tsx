import * as React from 'react';

interface IProps {
  countBy?: number;
}

interface IState {
  count: number;
}

class Description extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    countBy: 1,
  };

  public state: IState = {
    count: 0,
  };

  public increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  };

  //  interface NameAge {
  //     name: string;
  //     year: number;
  // };
 //
 let person = {
     name: 'Meghan',
     year: 33
 }


 public greet = (obj) => {
      return 'Hello ' + obj.name + ' age: ' + obj.year;
  }

  public alertButton = ()=> {
   return alert(this.greet(person));

  }
  public render() {




// const button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function() {
//     alert(greet(person));
// };

// document.body.appendChild(button);
    return (
      <div>
        <p>My favorite number is {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.alertButton}> Hello </button>
      </div>
    );
  }
}

export default Description;
