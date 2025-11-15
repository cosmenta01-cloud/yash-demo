const exampleController = {
  async getAll(req, res) {
    try {
      // Your logic here
      const data = [
        { id: 1, name: 'Example 1' },
        { id: 2, name: 'Example 2' }
      ];

      res.status(200).json({
        message: 'Data fetched successfully',
        data
      });
    } catch (error) {
      console.error('Get all error:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;

      // Your logic here
      const data = { id, name: 'Example Item' };

      res.status(200).json({
        message: 'Data fetched successfully',
        data
      });
    } catch (error) {
      console.error('Get by ID error:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },

  async create(req, res) {
    try {
      const { name } = req.body;

      // Your logic here
      const data = { id: Date.now(), name };

      res.status(201).json({
        message: 'Created successfully',
        data
      });
    } catch (error) {
      console.error('Create error:', error.message);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
};

module.exports = exampleController;
