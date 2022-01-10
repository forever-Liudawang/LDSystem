import React,{ Component } from 'react'

//函数组件
// export default function IndexFunc() {
//     return (
//         <div>
            
//         </div>
//     )
// }

//类组件
export default class IndexClass extends Component {
    // eslint-disable-next-line no-useless-constructor
    domRef=React.createRef()
    themeCtx = React.createContext()
    state = {
        a:1,
        b:2
    }
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('this :>> ', this.state);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps,'nextProps')
    }
    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log(prevProps,prevState,"props state==>>>")
        return {

        }
    }
    componentDidUpdate(props) {
        console.log(props,'props===>>>')
    }
    render() {
        return (
            <div>
                <div ref={this.domRef}>12</div>
            </div>
        )
    }
}
