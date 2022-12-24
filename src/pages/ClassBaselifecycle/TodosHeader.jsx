import React from 'react'
class TodosHeader extends React.Component {
    componentDidUpdate (prevProps) {
        var red = Math.floor(Math.random()*256);
        var green = Math.floor(Math.random()*256);
        var blue = Math.floor(Math.random()*256);

        var bgColor = `rgb(${red}, ${green}, ${blue})`;
        if(prevProps.headerSpan !== this.props.headerSpan){
            document.getElementById("inHd").innerHTML= "Check Box Selected / UnSelected"
            document.getElementById("inHd").style.backgroundColor = bgColor;
        }
    }
render () {
    return (
        <div className='ml-10'>
            <h4>Welcome to <span id='inHd'></span></h4><br />
        </div>
    )
}
}

export default TodosHeader