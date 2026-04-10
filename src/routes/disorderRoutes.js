router.get(`/`, disorderController.getHomePage);

router.get(`/disorder/ny`, disorderController.getAddDisorderForm);

router.get(`/disorder/:id`, disorderController.getDisorderDetails);



router.get(`/`, disorderController.getHomePage);

router.get(`/disorder/ny`, disorderController.getAddDisorderForm);

router.post(`/disorder/ny`, disorderController.createNewDisorder); 

router.get(`/disorder/:id`, disorderController.getDisorderDetails);

