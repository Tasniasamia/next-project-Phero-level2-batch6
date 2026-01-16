import Link from 'next/link';
import React from 'react';

const layout = ({children,analytics,slot}:{children:React.ReactNode,analytics:React.ReactNode,slot:React.ReactNode}) => {
    return (
        <div>
            <nav>
                <ul className='list-none flex flex-row gap-2 items-center'>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/dashboard/product">Product</Link></li>
                    <li><Link href="/dashboard/settings">Settings</Link></li>
                    <li><Link href="/dashboard/marketing">Marketing</Link></li>
                    <li><Link href="/dashboard/daywise">Daywise</Link></li>
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