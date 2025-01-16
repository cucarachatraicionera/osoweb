import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
// import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#home-section', current: false },
    { name: 'Exchange', href: '#exchange-section', current: false },
    { name: 'Features', href: '#features-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar bg-gray-900 text-white">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center">
    <img
        className="h-12 w-auto sm:h-16 lg:h-20"
        src={'/images/Logo/osologo.png'}
        alt="Crypto-Logo"
    />
</div>

                            {/* LINKS */}
                            <div className="hidden lg:flex items-center">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-gray-300 hover:underline',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CONNECT WALLET BUTTON */}
                            <button className="hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 bg-blue-600 rounded-md hover:bg-blue-500">
                                Connect Wallet
                            </button>
                        </div>

                        {/* DRAWER FOR MOBILE VIEW */}
                        <div className="block lg:hidden">
                            <Bars3Icon
                                className="block h-6 w-6 text-white"
                                aria-hidden="true"
                                onClick={() => setIsOpen(true)}
                            />
                        </div>

                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
