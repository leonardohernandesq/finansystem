import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { storage, db } from '../../Services/firebaseConnection'
import { AuthContext } from '../../Contexts/auth'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';

import * as S from './style';
import avatar from '../../Imgs/user.png';
import Banner from '../../Components/Banner';

export default function Profile() {
    const { user, SignOut, setUser } = useContext(AuthContext)
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);
    const [statusPhoto, setStatusPhoto] = useState(false);

    // Efetua a verificação dos arquivos enviados
    async function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
                setStatusPhoto(true)
            }
        }
    }

    // Salva a imagem no banco de dados e altera a URL da imagem do usuário
    async function handleUpload(e) {
        e.preventDefault();

        const currentUid = user.uid;
        await uploadBytes(ref(storage, `images/${currentUid}/${imageAvatar.name}`), imageAvatar)
            .then(async () => {
                console.log('sucesso!')

                await getDownloadURL(ref(storage, `images/${currentUid}/${imageAvatar.name}`))
                    .then(async (url) => {
                        let urlFoto = url;
                        await updateDoc(doc(db, "users", currentUid), {
                            avatarUrl: urlFoto
                        })
                            .then(() => {
                                let data = {
                                    ...user,
                                    avatarUrl: urlFoto,
                                }
                                setUser(data)
                            })
                    })
                    .catch((url) => {
                        console.log('nenhuma url' + url)
                    })
            })
    }

    return (
        <div>
            <S.Wrapper>
                <div>
                    <Banner imagem={require('../../Imgs/banner.jpg')} title={'Meu Perfil'} />
                </div>
                <S.Container>
                    <form onSubmit={handleUpload}>
                        <input id="photo" type={'file'} accept="image/" onChange={handleFile} /><br />
                        <label htmlFor='photo'>
                            {
                                imageAvatar === null ?
                                    <>
                                        <div className='div-photo'>
                                            <img src={avatar} alt={'Icone de um rosto'} />
                                            <span id='plusSpan'>+</span>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='div-photo'>
                                            <img src={avatarUrl} alt={'Imagem do rosto do Leonardo'} />
                                            <span id='plusSpan'>+</span>
                                        </div>
                                    </>
                            }
                        </label>
                        <h2>{user.nome}</h2>
                        {statusPhoto ? <button type='submit'>Salvar</button> : <></>}
                    </form>
                    <Link to='/registerfinance' className='buttonRegister'>Registrar Valores</Link>
                    <Link to='/' onClick={SignOut}>Sair da Conta</Link>
                </S.Container>
            </S.Wrapper>
        </div>
    );
}