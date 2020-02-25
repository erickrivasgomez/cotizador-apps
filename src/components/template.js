import React from 'react';

export default function templateEmail(){
    return(
            <table border="0" cellpadding="0" cellspacing="0" style="max-width: 602px; width: 100%;" align="center">
     
        <tr>
            <td style="background-color: #ffffff; padding: 15px; " align="left">
                <img src="https://ii.ct-stc.com/2/logos/empresas/2017/02/28/scio-consulting-sc-B6A99E5170EAF38E152336thumbnail.jpeg" alt="" style="max-width: 120px; width: 120px;"></img>
            </td>
        </tr>

        <tr>
            <td style="padding: 30px; background-image: url(https://hr.sciosites.com/wp-content/uploads/sites/3/2017/03/Looking-to-build-an-application-We-can-help.jpg); background-size: cover; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
                align="center" valign="middle">
                <h1 style="color: #ffffff; font-weight: 700; font-size: 50px;"> Thank you for using Scio's VMA </h1>
            </td>
        </tr>

        <tr>
            <td style="background-color: #ffffff; padding-top: 20px;">
                <h2 style="color: #0087ff; font-family: 'Open Sans', sans-serif; padding-bottom: 10px;" align="center"> Your app total cost </h2>
                <p style="color: #a3a3a3; font-family: 'Open Sans', sans-serif; padding-bottom: 50px;" align="center">
                ¡ Hello <strong>emailUser</strong> ! <br><br></br></br> This is your total price : <strong>totalPrice</strong>
                </p>
            </td>
        </tr>
 
        <tr>
            <td style="background-color: #0087ff;">
                <p style="color: #ffffff; text-align: center; font-family: sans-serif; font-size: 12px;">Copyright © 2003-2015 · All Rights Reserved · Scio Consulting International, LLC</p>
            </td>
        </tr>
    </table>

    )
}
