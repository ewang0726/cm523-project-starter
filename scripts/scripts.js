/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
document.addEventListener('DOMContentLoaded', () => {
    const colors = [
        // BLUE TONES
        { name: "云水蓝 (Yunshuilan)", hex: "#BACCD9", description: "Commonly used in dyeing and artistic works.", cmyk: "27, 13, 9, 0", rgb: "186, 204, 217", tone: "blue" },
        { name: "群青 (Lake Blue)", hex: "#1772B4", description: "A pure and elegant blue color seen in a clear sky after rain.", cmyk: "87, 52, 3, 0", rgb: "23, 114, 180", tone: "blue" },
        { name: "靛蓝 (Indigo)", hex: "#1E50A2", description: "A deep blue often seen in Chinese ceramics.", cmyk: "82, 61, 0, 36", rgb: "30, 80, 162", tone: "blue" },
        { name: "天蓝 (Sky Blue)", hex: "#90C3D4", description: "Resembling the clear blue of the sky.", cmyk: "28, 5, 5, 0", rgb: "144, 195, 212", tone: "blue" },
        { name: "青莲 (Azure Lotus)", hex: "#1CACEF", description: "A vibrant blue tone associated with lotus flowers.", cmyk: "82, 24, 0, 6", rgb: "28, 172, 239", tone: "blue" },
 
 
        // GREEN TONES
        { name: "翠绿 (Emerald Green)", hex: "#20A162", description: "Represents a picturesque scene of spring mountains.", cmyk: "79, 0, 50, 36", rgb: "32, 161, 98", tone: "green" },
        { name: "青玉 (Jade Green)", hex: "#1FAA69", description: "A traditional green color resembling jade stone.", cmyk: "79, 0, 40, 30", rgb: "31, 170, 105", tone: "green" },
        { name: "竹绿 (Bamboo Green)", hex: "#2E8B57", description: "The fresh green color of bamboo leaves.", cmyk: "67, 0, 36, 46", rgb: "46, 139, 87", tone: "green" },
        { name: "葱绿 (Spring Onion Green)", hex: "#8CCB5E", description: "A light, cheerful green symbolizing spring.", cmyk: "50, 0, 56, 0", rgb: "140, 203, 94", tone: "green" },
        { name: "孔雀绿 (Peacock Green)", hex: "#0E6158", description: "A deep green with a hint of blue, reminiscent of peacock feathers.", cmyk: "93, 13, 54, 60", rgb: "14, 97, 88", tone: "green" },
 
 
        // YELLOW TONES
        { name: "柚黄 (Pomelo Yellow)", hex: "#F1CA17", description: "A delicate and elegant color resembling silk.", cmyk: "0, 19, 100, 0", rgb: "241, 202, 23", tone: "yellow" },
        { name: "金黄 (Golden Yellow)", hex: "#FFD700", description: "The bright yellow of pure gold.", cmyk: "0, 16, 100, 0", rgb: "255, 215, 0", tone: "yellow" },
        { name: "秋黄 (Autumn Yellow)", hex: "#DDBE8D", description: "A warm yellow associated with the autumn season.", cmyk: "17, 28, 48, 0", rgb: "221, 190, 141", tone: "yellow" },
        { name: "杏黄 (Apricot Yellow)", hex: "#FBB04C", description: "The soft yellow of ripe apricots.", cmyk: "0, 41, 70, 0", rgb: "251, 176, 76", tone: "yellow" },
        { name: "土黄 (Earth Yellow)", hex: "#B38B6D", description: "A muted yellow-brown tone symbolizing the earth.", cmyk: "29, 46, 60, 5", rgb: "179, 139, 109", tone: "yellow" },
 
 
        // RED TONES
        { name: "朱红 (Oriental Red)", hex: "#ED5126", description: "Represents the refined flame and rising sun.", cmyk: "0, 79, 82, 7", rgb: "237, 81, 38", tone: "red" },
        { name: "石榴红 (Pomegranate Red)", hex: "#BE002F", description: "Inspired by the vibrant red of pomegranates.", cmyk: "0, 100, 81, 25", rgb: "190, 0, 47", tone: "red" },
        { name: "玫瑰红 (Rose Red)", hex: "#FF007F", description: "The romantic pinkish-red of rose petals.", cmyk: "0, 100, 50, 0", rgb: "255, 0, 127", tone: "red" },
        { name: "胭脂红 (Rouge Red)", hex: "#960018", description: "A deep red commonly used in cosmetics.", cmyk: "0, 83, 100, 41", rgb: "150, 0, 24", tone: "red" },
        { name: "樱桃红 (Cherry Red)", hex: "#D2042D", description: "Bright red reminiscent of ripe cherries.", cmyk: "0, 97, 79, 18", rgb: "210, 4, 45", tone: "red" },
 
 
        // Add more colors here
    ];
 
    // Code to dynamically generate the tone sections and modal logic (unchanged)
    const colorGrid = document.querySelector('.color-grid');
    const modal = document.getElementById('color-modal');
    const modalName = document.getElementById('color-name');
    const modalHex = document.getElementById('color-hex');
    const modalCmyk = document.getElementById('color-cmyk');
    const modalRgb = document.getElementById('color-rgb');
    const modalDescription = document.getElementById('color-description');
    const introText = document.querySelector('.intro-text');
    const aboutText = document.querySelector('.about-title');
    const closeButton = document.querySelector('.close-button');
    const tones = ["blue", "green", "yellow", "red"]; // Define tone categories
    let previouslySelectedBlock = null; 

 //Function to determine text color based on brightness
 const getTextColor = (hex) => {
    //Convert Hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5,7), 16);

    //Calculate brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    //Return black for light backgrounds and white for dark backgrounds
    return brightness > 128 ? '#000000' : '#FFFFFF';
 };

    // Loop through each tone and create sections (unchanged)
    tones.forEach(tone => {
        const toneSection = document.createElement('div');
        toneSection.classList.add('tone-section');
 
 
        const toneTitle = document.createElement('h2');
        toneTitle.textContent = tone.charAt(0).toUpperCase() + tone.slice(1);
        toneSection.appendChild(toneTitle);
 
 
        colors
            .filter(color => color.tone === tone)
            .forEach(color => {
                const colorBlockContainer = document.createElement('div');
                colorBlockContainer.classList.add('color-block-container');
 
 
                const colorBlock = document.createElement('div');
                colorBlock.classList.add('color-block');
                colorBlock.style.backgroundColor = color.hex;
                colorBlock.setAttribute('data-name', color.name);
                colorBlock.setAttribute('data-hex', color.hex);
                colorBlock.setAttribute('data-description', color.description);
                colorBlock.setAttribute('data-cmyk', color.cmyk);
                colorBlock.setAttribute('data-rgb', color.rgb);
 
 
                const colorName = document.createElement('p');
                colorName.classList.add('color-name');
                colorName.textContent = color.name;
 
 
                colorBlockContainer.appendChild(colorBlock);
                colorBlockContainer.appendChild(colorName);
                toneSection.appendChild(colorBlockContainer);
            });
 
 
        colorGrid.appendChild(toneSection);
    });
 
 
    // Modal functionality remains the same
    colorGrid.addEventListener('click', e => {
        const block = e.target.closest('.color-block');
        if (block) {
            const selectedColor = block.getAttribute('data-hex');

            //Remove the selected class from the previous selected block
            if (previouslySelectedBlock) {
                previouslySelectedBlock.classList.remove('selected');
            }

            //Add the selected class to the current block
            block.classList.add('selected');
            previouslySelectedBlock = block;
 
 
            modalName.textContent = block.getAttribute('data-name');
            modalHex.textContent = selectedColor;
            modalCmyk.textContent = block.getAttribute('data-cmyk');
            modalRgb.textContent = block.getAttribute('data-rgb');
            modalDescription.textContent = block.getAttribute('data-description');
           
            //Update text and background colors
            const textColor = getTextColor(selectedColor);
            modal.style.color = textColor;
            modal.style.backgroundColor = selectedColor;
            document.body.style.backgroundColor = selectedColor;
            document.body.style.color = textColor;
            introText.style.color = textColor;
            aboutText.style.color = textColor; 
 
 
            modal.style.backgroundColor = selectedColor;
            modal.style.display = 'flex';
        }
    });
 
 
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
 
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
 
    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
 });
 