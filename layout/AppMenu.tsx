/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '../types/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'User',
            items: [{ label: 'User', icon: 'pi pi-fw pi-user', to: '/uikit/user' }]
        },
        {
            label: 'Network',
            items: [
                {
                    label: 'Submenu 1',
                    items: [
                        {
                            label: 'Submenu 1.1',
                            items: [
                                { label: 'Submenu 1.1.1', },
                                { label: 'Submenu 1.1.2', },
                                { label: 'Submenu 1.1.3', }
                            ]
                        },
                        {
                            label: 'Submenu 1.2',
                            items: [{ label: 'Submenu 1.2.1', }]
                        }
                    ]
                },
                {
                    label: 'Submenu 2',
                    items: [
                        {
                            label: 'Submenu 2.1',

                            items: [
                                { label: 'Submenu 2.1.1', },
                                { label: 'Submenu 2.1.2', }
                            ]
                        },
                        {
                            label: 'Submenu 2.2',
                            items: [{ label: 'Submenu 2.2.1', }]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Market',
            items: [
                {
                    label: 'Tokens',
                    items: [
                        { label: 'Ethereum', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
                        { label: 'BSC', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png' },
                        { label: 'Arbitrum', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png' },
                        { label: 'Polygon', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png' },
                        { label: 'Avalanche', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png' },
                        { label: 'zkSync', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24091.png' },
                        { label: 'Base', logo: 'https://dd.dexscreener.com/ds-data/chains/base.png' },
                        { label: 'Optimism', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png' },
                        { label: 'Solana', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png' },
                        { label: 'Linea', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27657.png' },
                        { label: 'Osmosis', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12220.png' },
                        { label: 'Fantom', logo: 'https://dd.dexscreener.com/ds-data/chains/fantom.png' },
                        { label: 'Aptos', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png' },
                        { label: 'Metis', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png' },
                        { label: 'Sui', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png' },
                    ]
                },
                {
                    label: 'Defi',
                    items: [
                        { label: 'Ethereum', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
                        { label: 'BSC', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png' },
                        { label: 'Arbitrum', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png' },
                        { label: 'Polygon', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png' },
                        { label: 'Avalanche', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png' },
                        { label: 'zkSync', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24091.png' },
                        { label: 'Base', logo: 'https://dd.dexscreener.com/ds-data/chains/base.png' },
                        { label: 'Optimism', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png' },
                        { label: 'Solana', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png' },
                        { label: 'Linea', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/27657.png' },
                        { label: 'Osmosis', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12220.png' },
                        { label: 'Fantom', logo: 'https://dd.dexscreener.com/ds-data/chains/fantom.png' },
                        { label: 'Aptos', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png' },
                        { label: 'Metis', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png' },
                        { label: 'Sui', logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png' },
                        {
                            label: 'Submenu 2.1',

                            items: [
                                { label: 'Submenu 2.1.1', },
                                { label: 'Submenu 2.1.2', }
                            ]
                        },
                        {
                            label: 'Submenu 2.2',

                            items: [{ label: 'Submenu 2.2.1', }]
                        }
                    ]
                }
            ]
        },
        {
            label: 'UI Components',
            items: [
                { label: 'Form Layout', to: '/uikit/formlayout' },
                { label: 'Input', to: '/uikit/input' },
                { label: 'Float Label', to: '/uikit/floatlabel' },
                { label: 'Invalid State', to: '/uikit/invalidstate' },
                { label: 'Button', to: '/uikit/button', class: 'rotated-icon' },
                { label: 'Table', to: '/uikit/table' },
                { label: 'List', to: '/uikit/list' },
                { label: 'Tree', to: '/uikit/tree' },
                { label: 'Panel', to: '/uikit/panel' },
                { label: 'Overlay', to: '/uikit/overlay' },
                { label: 'Media', to: '/uikit/media' },
                { label: 'Menu', to: '/uikit/menu', },
                { label: 'Message', to: '/uikit/message' },
                { label: 'File', to: '/uikit/file' },
            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
