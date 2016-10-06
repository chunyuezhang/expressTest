import axios from 'axios';


  test(data){
    var data= {title="myTitle",content="myCntent"}
    console.log(data);
    axios.test('http://localhost:3000/tests',data)
  }

    render() {
      return (
        <div>
          {this.data.title}
        </div>
      );
    }


    export default test;
