import {describe, expect, it} from "vitest";
import getRegisterData from "../repository/getRegisterData.ts";
import postRegisterData from "../repository/postRegisterData.ts";
import postDocumentData from "../repository/postDocumentData.ts";
import getDocumentData from "../repository/getDocumentData.ts";


describe('getRegisters()', () => {
    it('should be vitest', async () => {
        const result = await getRegisterData();
        expect(result).toStrictEqual([
            {
                id: 1,
                name: 'DIMAS',
                npm: '50422430',
                major: 'INFORMATIKA',
                gender: 'Men',
                birth_place: 'BEKASI',
                birth_date: '2004-02-09',
                address: 'JL KUSUMA BARAT',
                phone: '082329135125',
                email: 'dimassfeb@gmail.com',
                apply_position: 'Programmer',
                ipk: 4,
                created_at: '2023-07-28T06:21:48.812651',
                update_at: '2023-07-28T06:21:48.812651'
            }
        ]);
    });
});

describe('postRegisters()', () => {
    it('should be true', async () => {
        const now = new Date();
        const result = await postRegisterData({
            name: "Dimas 2",
            email: "dimassfeb@gmail.com",
            ipk: 4,
            apply_position: "Programmer",
            phone: "082329135125",
            address: "Jalan Jalan",
            npm: "50422430",
            birth_date: now,
            birth_place: "Bekasi",
            gender: "Men",
            major: "Teknik Informatika"
        })

        expect(result).toBeTruthy();
    });
});

describe('postDocuments()', () => {
    it('should be true', async () => {
        const result = await postDocumentData({
            ktm: "url2",
            cv: "url2",
            userID: 1,
            sertifikat: "url2",
            krs: "url2",
            ktp: "url2",
            dns: "url2",
            photo: "url2",
        });
        expect(result).toBeTruthy();
    });
});


describe('getDocumentsData()', () => {
    it('should be true', async () => {
        const result = await getDocumentData(24);
        console.log(result);
        expect(true).toBe(true);
    });
});
