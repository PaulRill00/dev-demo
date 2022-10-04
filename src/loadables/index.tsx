
import { IHeaderItem } from '@dmgincs/common/dist/components/molecules/Navbar';
import { FCWithChildren } from '@dmgincs/utils';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { ButtonProps } from 'semantic-ui-react';

const ssr = true;

export const DiButton = dynamic(() => import(/* webpackChunkName: "DiButton" */'@dmgincs/common').then(x => x.DiButton), { ssr: ssr }) as FCWithChildren<{action?:() => void; link?: string; grey?: boolean; classes?: string; children: React.ReactNode} & ButtonProps>;
export const Navbar = dynamic(() => import(/* webpackChunkName: "Navbar" */'@dmgincs/common').then(x => x.Navbar)) as FC<{ navitems: IHeaderItem[]; loggedInLinks?: { label: string; link: string }[] }>;

