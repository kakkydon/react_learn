// useEffectはレンダリングが終わった後に呼ばれるhookのこと
import React, { FC, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import firebase from '../../firebase';
import { TileData } from '../../types/types';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex', //横並び
            flexWrap: 'wrap',// 横並びを折り返す
            width: '80%',
            textAlign: 'center',
            marginTop: '2%',// 上から2%を空白にする

        },

        titleImage: {
            height: '218px',
            width: '218px',
        }

    }),
)

const ImageItemList: FC = () => {
    const [data, setData] = useState<TileData[]>([]);
    // topPage.tsxの:keywordが入る
    const { keyword } = useParams();
    const classes = useStyles();
    const history = useHistory();

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
    useEffect(() => {
        getData(keyword);
    }, []);

    return (
        <div className={classes.root}>
            {data.map((tile) => (
                <div>
                    <Button onClick={()=>history.push('/download/' + tile.title)}>
                        <img className={classes.titleImage} src={tile.image} alt={tile.title} />
                    </Button>
                    <h3>{tile.title}</h3>
                </div>
            ))}
        </div>
    );

}

export default ImageItemList;