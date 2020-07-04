import React from 'react';
import './flow.scss'
const imgs = [
'http://img5.imgtn.bdimg.com/it/u=268442375,2955567300&fm=26&gp=0.jpg',
'http://img1.imgtn.bdimg.com/it/u=1889454486,4065033593&fm=26&gp=0.jpg',
'http://img0.imgtn.bdimg.com/it/u=1338801445,2268032633&fm=26&gp=0.jpg',
'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141769922,79490881&fm=26&gp=0.jpg',
'http://img2.imgtn.bdimg.com/it/u=3049320776,2885302912&fm=26&gp=0.jpg',
'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1763553727,2537670383&fm=26&gp=0.jpg',
'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3194549797,3256915250&fm=26&gp=0.jpg',
'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=174824340,948491214&fm=26&gp=0.jpg',
'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3284878375,2528530122&fm=26&gp=0.jpg',
'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1531229577,3396527109&fm=26&gp=0.jpg',
'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3376244002,3610793409&fm=26&gp=0.jpg',
'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2451983048,1491784596&fm=26&gp=0.jpg'
]
export class Flow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="flow-wrapper">
                {
                    imgs.map((item,index)=>{
                        return (
                            <div key={index}><img src={item} alt=""/>
                            </div>
                            // <span></span>
                        )
                    })
                }
            </div>
        )
    }
}