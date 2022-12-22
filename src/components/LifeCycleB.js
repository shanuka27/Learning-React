import React, { Component } from 'react'

class LifeCycyleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'shanu'
      }
      console.log('LifeCycleB con')
    }

    static getDerivedStateFormProps(props, state){
        console.log('LifeCycleB GetDer...')
        return null
    }

    componentDidMount(){
        console.log('compoB...Did')
    }

  render() {
    console.log('renderB')
    return (
      <div>
        Life Cycyle B
      </div>
    )
  }
}

export default LifeCycyleB