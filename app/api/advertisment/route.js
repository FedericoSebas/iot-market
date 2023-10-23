import path from 'path';

export async function GET(req) {
        const images = ['perseverance.png', 'smart-flower-pot.png'];
        const measurements = [{ height: 114, width: 170.3 }, { height: 139.3, width: 110 }]
        const imagePaths = images.map((image) => path.join('/images', image));
        const imageObjects = imagePaths.map((imagePath, index) => ({
            name: images[index],
            path: imagePath,
            ...measurements[index]
        }));
        return Response.json({imageObjects},{status: 200});
    
}