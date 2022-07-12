import * as React from "react"

import vendors from '../../json/marketplace.json';
import './VendorSelector.scss';

// Shuffle vendors
for (let i = vendors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [vendors[i], vendors[j]] = [vendors[j], vendors[i]];
}

const VendorSelector = ({
    checkboxRef,
    setCheckbox
}) => {
    const handleChange = () => {
        setCheckbox(checkboxRef.current.checked)
    };

    return (
        <ul className="vendor-list pt-5">
            {vendors.map(
                (vendor, i): string | JSX.Element =>
                    vendor && (
                        <li className="vendor-li">
                            <input id={`vendor${vendor.name}`} ref={el => checkboxRef.current[`vendor${vendor.name.replace(/\s+/g, '')}`] = el} type="checkbox" defaultChecked={true} onChange={handleChange} />
                            <label className="vendor-label" htmlFor={`vendor${vendor.name}`} title={vendor.name}><img src={`/images/vendors/${vendor.icon}`}/></label>
                        </li>
                )
            )}
        </ul>
    );
};

export default VendorSelector;
