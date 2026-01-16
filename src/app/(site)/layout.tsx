import Link from 'next/link';
import React from 'react';

const layout = ({children,analytics,slot}:{children:React.ReactNode,analytics:React.ReactNode,slot:React.ReactNode}) => {
    return (
        <div>
            <nav>
                <ul className='list-none flex flex-row gap-2 items-center'>
                    <li><Link href="/development">Development</Link></li>
                    <li><Link href="marketing">Marketing</Link></li>
                    <li><Link href="/sales">Sales</Link></li>

                    <li><Link href="/daywise">Daywise</Link></li>

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