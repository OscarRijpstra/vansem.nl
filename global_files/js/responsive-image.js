const responsiveImages = Array.from(document.getElementsByClassName('responsive__img'));
const imageHost = 'https://res.cloudinary.com/dyubvu51u/image/upload/';
const cloudName = 'v1566569858';
const folder = 'Vansem';

responsiveImages.map(function (container) {
    const publicID = container.getAttribute('data-public-id');
    const type = container.getAttribute('data-type');
    const alt = container.getAttribute('data-alt') || '';
    const imgClass = container.getAttribute('data-class') || '';

    switch (type) {
        case 'header':
            renderImage(container, publicID, alt, imgClass, 50, ['webp', 'wdp', 'jp2', 'jpg'], {
                mobile: [
                    [500, 500],
                    [600, 500],
                    [700, 500],
                    [800, 600],
                    [900, 700],
                    [1000, 800],
                    [1100, 900],
                    [1200, 1000]
                ],
                desktop: [
                    [1000, 700],
                    [1100, 700],
                    [1200, 700],
                    [1300, 700],
                    [1400, 700],
                    [1500, 700],
                    [1600, 700],
                    [1700, 700],
                    [1800, 700],
                    [1900, 700],
                    [2000, 700]
                ]
            });
            break;

        case 'product-thumbnail':
            renderImage(container, publicID, alt, imgClass, 50, ['webp', 'wdp', 'jp2', 'jpg'], {
                mobile: [
                    [200, 200],
                    [300, 300],
                    [400, 400],
                    [500, 500],
                    [600, 500],
                    [700, 700],
                    [800, 800],
                ],
                desktop: [
                    [300, 300],
                    [400, 400],
                    [500, 500],
                    [600, 600]
                ]
            });
            break;

        case 'imageContainer-item':
            renderImage(container, publicID, alt, imgClass, 30, ['webp', 'wdp', 'jp2', 'jpg'], {
                mobile: [
                    [400, 400],
                    [500, 500],
                    [600, 600],
                    [700, 700],
                    [800, 800],
                    [900, 900],
                    [1000, 1000],
                    [1100, 1100]
                ],
                desktop: [
                    [200, 200],
                    [300, 300],
                    [400, 400]
                ]
            });
            break;

        case 'icon':
            renderImage(container, publicID, alt, imgClass, 10, ['webp', 'png'], {
                mobile: [
                    [100, 100]
                ],
                desktop: [
                    [100, 100]
                ]
            })
            break;

        case 'grid-item-img':
            renderImage(container, publicID, alt, imgClass, 100, ['webp', 'png'], {
                mobile: [
                    [400, 'auto'],
                    [500, 'auto'],
                    [600, 'auto'],
                    [700, 'auto'],
                    [800, 'auto'],
                    [900, 'auto'],
                    [1000, 'auto'],
                    [1100, 'auto']
                ],
                desktop: [
                    [200, 'auto'],
                    [300, 'auto'],
                    [400, 'auto']
                ]
            })
            break;
    }
})

function renderImage(container, publicID, alt, imgClass, quality, imgExtentions, resolutions) {
    const picture = document.createElement('picture');
    container.appendChild(picture);

    imgExtentions.map(function (extention) {
        if (resolutions.mobile.length) {
            const source = document.createElement('source');
            picture.appendChild(source);
            source.media = '(max-width: 930px)';
            source.type = 'image/' + extention;

            const sourceValue = resolutions.mobile.map(function (resolution) {
                return imageHost + 'q_' + quality + ',c_fill,w_' + resolution[0] + (resolution[1] != 'auto' ? ',h_' + resolution[1] : '') + '/' + cloudName + '/' + folder + '/' + publicID + '.' + extention + ' ' + resolution[0] + 'w';
            });
            source.srcset = sourceValue.join(', ');
        }

        if (resolutions.desktop.length) {
            const source = document.createElement('source');
            picture.appendChild(source);
            source.media = '(min-width: 930px)';
            source.type = 'image/' + extention;

            const sourceValue = resolutions.desktop.map(function (resolution) {
                return imageHost + 'q_' + quality +',c_fill,w_' + resolution[0] + (resolution[1] != 'auto' ? ',h_' + resolution[1] : '') + '/' + cloudName + '/' + folder + '/' + publicID + '.' + extention + ' ' + resolution[0] + 'w';
            });
            source.srcset = sourceValue.join(', ');
        }
    })

    const img = document.createElement('img');
    if (imgClass) img.classList.add(imgClass);
    picture.appendChild(img);
    img.src = imageHost + 'c_fill,w_900/' + cloudName + '/' + folder + '/' + publicID + '.jpg';
    img.alt = alt;
}