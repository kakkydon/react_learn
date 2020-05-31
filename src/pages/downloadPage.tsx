import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import firebase from '../firebase';
import { TileData } from '../types/types';
import TopHeader from '../components/topPage/topHeader';

const useStyles = makeStyles(() =>
    createStyles({
        main:{
            textAlign:'center',
            marginTop:'5%',
        },

        tileImage: {
            height: '436px',
            width: '436px',
        }
    })
);

const DownloadPage: FC = () => {
    // 別途定義した型定義クラス（types）で値を保持する
    const [data, setData] = useState<TileData[]>([]);
    // URLのget値を受け取れる
    const { keyword } = useParams();
    const classes = useStyles();

    // FireStorageからデータを取得して、setDataでデータを保持
    const getData = async (searchWord: string | undefined) => {
        const db = firebase.firestore();
        const tileDataRef = db.collection("tileData");
        const searchData = tileDataRef.where('keyword', 'array-contains', searchWord);
        const snapShot = await searchData.get();
        const temporaryData: object[] = [];

        snapShot.docs.map(doc => {
            temporaryData.push(doc.data());
        })

        setData(temporaryData as TileData[]);
    }

    // 更新されたときに呼ばれないようにするため、引数に空の配列
    // これがないと、無限ループ。レンダリングの後に呼ばれる。
    useEffect(() => {
        getData(keyword);
    }, []);

    const displayImage = () => {
        return (
            <div>
                {data.map((tile) => (
                    <div>
                        <img className={classes.tileImage} src={tile.image} alt={tile.title} />
                    </div>
                ))}
            </div>
        )
    }

    const downloadButton = () => {
        return (
            <div>
                {data.map((tile) => (
                    <Button
                        variant='contained'
                        href={tile.downloadUrl}
                    >
                        無料ダウンロード
                    </Button>
                ))}
            </div>
        )
    }

    return (
        <div>
            <TopHeader />
            <div className={classes.main}>
                {displayImage()}
                {downloadButton()}
            </div>
        </div>
    )
}
export default DownloadPage;