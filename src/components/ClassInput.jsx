import React, {useState} from "react";

const InputBondage = () => {
    const [value, setValue] = useState("tesing");

    function changeValue(event) {
        setValue(event.target.value)
    }

    return(
        <div>
            <h1>{value}</h1>
            <input type="text" value={value} onChange={changeValue}/>
        </div>
    );
}

// class InputBondage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.value}</h1>
//                 <input type="text" value={this.state.value} onChange={(event) => this.state.value = event.target.value}/>
//             </div>
//         );
//     }
// }

export default InputBondage;