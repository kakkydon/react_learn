import React, { FC, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

import flower from '../../assets/images/flower.jpg';

// CSS定義
const useStyle = makeStyles(() =>
    createStyles({
        background: {
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${flower})`,// typeScriptのコードを文字列に埋め込む際は$をつける　かつ　`で囲む
            backgroundSize: 'cover',
        },

        paper: {
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '33%',
            width: '45%',
        }
    }),
)

const TopMain: FC = () => {
    // cssを設定するための関数
    const classes = useStyle();
    // const[値を保持する変数,変数の値を変える関数]=useState(初期値);
    const [keyword, setKeyword] = useState("")
    // 画面遷移を定義する基幹画面でのルート定義と連動
    const history = useHistory();
    // 引数で入力された値を受け取って、値を保持
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    }
    // ボタンクリック時、下記URLに画面遷移
    const handleSubmit = () => {
        history.push("/search/" + keyword);
    }
    return (
        <div className={classes.background}>
            <Paper className={classes.paper} component='form' onSubmit={handleSubmit}>
                <IconButton type='submit'>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder='無料素材を検索'
                    onChange={handleChange}
                />
            </Paper>
        </div>
    )
}

export default TopMain;