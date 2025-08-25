export const device_request = async (userId: string) => {
    try {
        const response = await fetch(`http://${process.env.PRIVATE_SERVER_ADDRESS}` + '/device?userId=' + userId);
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
        return response.json()
    } catch (error) {
        throw error
    }
}

export const updateDeviceStatus = async (requestBody: any) => {
    return await fetch(`http://${process.env.PRIVATE_SERVER_ADDRESS}` + '/device/status', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
        .then(res => res.json())
        .catch(err => err);
};
