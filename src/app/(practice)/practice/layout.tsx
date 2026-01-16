import Link from 'next/link';
import React from 'react';

const layout = ({children,analytics,slot}:{children:React.ReactNode,analytics:React.ReactNode,slot:React.ReactNode}) => {
    return (
        <div>
            <nav>
                <ul className='list-none flex flex-row gap-2 items-center'>
                    <li><Link href="/practice">practice</Link></li>
                    <li><Link href="/practice/product">Product</Link></li>
                    <li><Link href="/practice/settings">Settings</Link></li>
                    <li><Link href="/practice/marketing">Marketing</Link></li>
                    <li><Link href="/practice/daywise">Daywise</Link></li>
                </ul>
            </nav>
            {children}
            <div className='flex gap-2 mt-3'>
            {analytics}
            {slot}
            </div>
        </div>
    );
};

export default layout;