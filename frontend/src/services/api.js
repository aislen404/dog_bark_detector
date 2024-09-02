export const fetchWidgets = async () => {
    const response = await fetch('/api/widgets');
    return await response.json();
};

export const createWidget = async (widget) => {
    const response = await fetch('/api/widgets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(widget),
    });
    return await response.json();
};
