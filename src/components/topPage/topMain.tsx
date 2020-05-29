import React, { FC } from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';

import flower from '../../assets/images/flower.jpg';

const useStyle = makeStyles(() => 
    createStyles({
        background: {
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${flower})`,// typeScriptのコードを文字列に埋め込む際は$をつける　かつ　`で囲む
            backgroundSize: 'cover',
        },
    }),
)

const TopMain: FC = () =>{
    const classes = useStyle();
    return(
        <div className={classes.background}>

        </div>
    )
}

export default TopMain;