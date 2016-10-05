import React, { Component } from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import axios from 'axios';

class Form extends Component {
  getStyles() {
    return {
      form: {
        padding: '20px 40px',
      },
      div: {
        marginBottom: '10px'
      },
      label: {
        display: 'block',
        fontSize: '.9em',
        color: 'rgba(0,0,0,.6)',
        paddingBottom: '10px'
      },
      input: {
        width: '100%',
        height: '48px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        padding: '10px',
        boxSizing: 'border-box',
        ':focus': {
          border: '1px solid #00bcd4',
          outline: 'none'
        }
      },
      actions: {
        textAlign: 'center'
      },
      button: {
        width: '120px',
        height: '36px',
        border: 'none',
        backgroundColor: '#ff4081',
        fontSize: '1em',
        color: '#fff',
        display: 'inline-block',
        margin: '20px auto 0',
        borderRadius: '20px',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        }
      },
      link: {
        display: 'inline-block',
        marginLeft: '15px',
        fontSize: '1em',
        color: '#00bcd4',
        opacity: '.8',
        textDecoration: 'none'
      }
    };
  }
  handleSubmit(e){
    e.preventDefault();
    let title = this.refs.title.value;
    if (title.length==0) {
      alert('内容不能为空')
      return;
    }
    axios.post('http://localhost:3000/posts',{title})
    .then(res=>{
      console.log(res.data.message);
      this.context.router.push('/');
    })
  }
  render() {
    const styles = this.getStyles();
    return (
      <form style={styles.form} onSubmit= {this.handleSubmit.bind(this)}>
        <div style={styles.div}>
          <label style={styles.label}>标题</label>
          <input style={styles.input} key='1' ref='title' />
        </div>
        <div style={styles.actions}>
          <button type='submit' style={styles.button}>Submit</button>
          <Link to='/' style={styles.link}>取消</Link>
        </div>
      </form>
    );
  }
}
Form.contextTypes = {
  router:React.PropTypes.object
};

export default Radium(Form);
