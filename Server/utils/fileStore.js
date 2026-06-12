import fs from 'fs/promises';

export const readJSON=async (path) => {
    try {
        const data = await fs.readFile(path, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading JSON from ${path}:`, error);
        return [];
    }
};

export const writeJSON = async(path,data)=>{
    try {
        await fs.writeFile(path,JSON.stringify(data,null,2));
    } catch (error) {
        console.error("Error writing file: ",error);
    }
}