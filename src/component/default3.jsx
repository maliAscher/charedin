import React from 'react'

export default function Demo2Contact() {
    const textStyle = {
        color: '#444', // dark grey color
        textAlign: 'center',
        direction: 'rtl', // right-to-left direction for Hebrew text
        margin: '40px 20px 20px 20px', // more margin from the top and sides
        padding: '100px', // padding around the text
        fontSize: '40px', // increase the font size
    };

    return (
        <div style={textStyle}>
            <p>
                מַעֲלָה גְּדוֹלָה שֶׁאֵין לְמַעְלָה מִמֶּנָּה זֶה הַמַּחֲזִיק בְּיַד יִשְׂרָאֵל … עוֹשֶׂה עִמּוֹ שֻׁתָּפוּת אוֹ מַמְצִיא לוֹ מְלָאכָה כְּדֵי לְחַזֵּק אֶת יָדוֹ עַד שֶׁלֹּא יִצְטָרֵךְ לַבְּרִיּוֹת לִשְׁאל. וְעַל זֶה נֶאֱמַר (ויקרא כה-לה) "וְהֶחֱזַקְתָּ בּוֹ גֵּר וְתוֹשָׁב וָחַי עִמָּךְ" .
                (הרמב"ם, משנה תורה)
            </p>
        </div>
    );
};
  
