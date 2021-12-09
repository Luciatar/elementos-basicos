export const clientId = () =>{

    let client = new ClientJS();
    let fingerprint = client.getFingerprint(); // Get Client's Fingerprint
    return fingerprint;
}