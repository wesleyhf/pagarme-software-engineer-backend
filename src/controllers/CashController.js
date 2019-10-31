const controller = {
    in(request, response) {
        return response.json({
            message: 'Cash-in',
        });
    },
};

module.exports = controller;
