import React from "react";

export const FormErrors = ({formErrors}) =>

<div>
{Object.keys(formErrors).map((fieldName, index) => {
    if(formErrors[fieldName].length > 0) {
        return(
            <p className="text-red-500" key={index}>{fieldName} {formErrors[fieldName]}</p>
        )
    } else {
        return('');
    }
})}
</div>