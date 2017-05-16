import React from 'react'
import Submit from '../buttons/submit'
import Cancle from '../buttons/cancle'

export default class AddFiles extends React.Component{

    constructor(){
        super(...arguments);
        this.state={
            addFile:false,
            fileName:''
        };
    }
    render(){
        return (
            <div className='m-add-files'>
                <div className='u-create' onClick={this.create}> +新建文集</div>
                {
                this.state.addFile &&
                    <div className='u-file-name'>
                        <input type='text' placeholder='请输入文集名' onChange={this.fileNameSync} value={this.state.fileName} />
                        <div>
                            <Submit value='提交' func={this.submit} />
                            <Cancle value='取消' func={this.cancle} />
                        </div>
                    </div>
                }
            </div>
        )
    }

    fileNameSync = (e) => {
        let fileName = e.target.value;
        this.setState({
            fileName:fileName
        });
    }

    create = () => {
        this.setState({
            addFile:true
        });
    }

    submit = () => {
        alert('submit');
    }

    cancle = () => {
        this.setState({
            fileName:'',
            addFile:false
        });
    }
}
