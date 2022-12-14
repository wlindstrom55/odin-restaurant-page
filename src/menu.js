function createMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    //menu title
    const menuHead = document.createElement('div');
    const menuH = document.createElement('h1');
    menuH.setAttribute('class', 'tabhead');
    menuH.innerHTML = 'Menu:';
    menuHead.append(menuH);
    content.append(menuHead);

    //#1 Albondigas
    const menu1 = document.createElement('div');
    const menu1Title = document.createElement('h2');
    menu1Title.innerHTML = 'Alb&oacute;ndigas';
    menu1.append(menu1Title);
    const meatballsDiv = document.createElement('div');
    meatballsDiv.setAttribute('class', 'image-container');
    const meatballs = document.createElement('img');
    meatballs.setAttribute('src', '../src/img/meatballs.jpg');
    meatballs.setAttribute('class', 'menuimage');
    meatballsDiv.append(meatballs);
    menu1.append(meatballsDiv);
    const menu1Desc = document.createElement('p');
    menu1Desc.innerHTML = 'Pretty much meatballs with sauce.';
    menu1.append(menu1Desc);
    content.append(menu1);

    //#2 Aceitunas
    const menu2 = document.createElement('div');
    const menu2Title = document.createElement('h2');
    menu2Title.innerHTML = 'Aceitunas';
    menu2.append(menu2Title);
    const menu2Desc = document.createElement('p');
    menu2Desc.innerHTML = 'Olives, with a filling of red bell peppers.';
    menu2.append(menu2Desc);
    content.append(menu2);

    //#3 Chorizo a la sidra
    const menu3 = document.createElement('div');
    const menu3Title = document.createElement('h2');
    menu3Title.innerHTML = 'Chorizo a la Sidra';
    menu3.append(menu3Title);
    const menu3Desc = document.createElement('p');
    menu3Desc.innerHTML = 'Chorizo sausage slowly cooked in a cider.';
    menu3.append(menu3Desc);
    content.append(menu3);

    //#4 

}

//export default createMenu();
export {
    createMenu
};