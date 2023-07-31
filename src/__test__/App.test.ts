import {describe, expect, it} from "vitest";
import getRegisterData from "../repository/getRegisterData.ts";
import postRegisterData from "../repository/postRegisterData.ts";
import postDocumentData from "../repository/postDocumentData.ts";
import getDocumentData from "../repository/getDocumentData.ts";
import generateFolderName from "../helper/generateFolderName.ts";
import supabase from "../db/DatabaseClient.ts";
import deleteRegisterData from "../repository/deleteRegisterData.ts";
import deleteDocumentData from "../repository/deleteDocumentData.ts";


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
        await postDocumentData({
            ktm: "ktm.png",
            cv: "cv.pdf",
            userID: 55,
            sertifikat: "sertifikat.pdf",
            krs: "krs.pdf",
            ktp: "ktp.png",
            dns: "dns.pdf",
            photo: "photo.png",
        }, generateFolderName());
    });
});


describe('getDocumentsData()', () => {
    it('should be true', async () => {
        await getDocumentData(43);
    });
});

describe('deleteDocumentData()', () => {
    it('should be deleted', async () => {
        const supabaseClient = supabase;
        deleteDocumentData(supabaseClient, 42).then(value => value);
        deleteRegisterData(supabaseClient, 42).then(value => value);
    });
});