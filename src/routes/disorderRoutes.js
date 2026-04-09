router.get(`/`, disorderController.getHomePage);

router.get(`/disorder/ny`, disorderController.getAddDisorderForm);

router.get(`/disorder/:id`, disorderController.getDisorderDetails);