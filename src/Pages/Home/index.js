import React from 'react';

import Banner from '../../Components/Banner';

export default function Home() {
    return (
        <div>
            <Banner imagem={require('../../Imgs/banner.jpg')} title={'Home'} />
        </div>
    );
}