import { ReactNode } from 'react';
import './boxedLayout.pcss';

export const BoxedLayout = ( { children }: { children: ReactNode } ) =>
{
    return (
        <div className="boxedLayout">
            { children }
        </div>
    );
};
