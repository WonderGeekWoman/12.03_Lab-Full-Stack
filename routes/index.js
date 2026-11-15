var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  try {
    req.db.query('SELECT * FROM todos;', (err, results) => {
      if (err) {
        console.error('Error fetching todos:', err);
        return res.status(500).send('Error fetching todos');
      }
      res.render('index', { title: 'Your ToDo List', todos: results });
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
});

/* create task on page*/
router.post('/create', function (req, res, next) {
    const { task } = req.body;
    if (!task || task.trim() === '') {
      return res.redirect('/');
    }
    try {
      req.db.query('INSERT INTO todos (task) VALUES (?);', [task.trim()], (err, results) => {
        if (err) {
          console.error('Error adding todo:', err);
          return res.status(500).send('Error adding todo');
        }
        console.log('Todo added successfully:', results);
        // Redirect to the home page after adding
        res.redirect('/');
      });
    } catch (error) {
      console.error('Error adding todo:', error);
      res.status(500).send('Error adding todo');
    }
});

/* update task */
router.post('/update', function (req, res, next) {
    const { id, task } = req.body;
    if (!task || task.trim() === '') {
      return res.redirect('/');
    }
    try {
      req.db.query('UPDATE todos SET  task = ? WHERE id = ?;', [task.trim(), id], (err, results) => {
        if (err) {
          console.error('Error updating todo:', err);
          return res.status(500).send('Error updating todo');
        }
        console.log('Todo updated successfully:', results);
        // Redirect to the home page after update
        res.redirect('/');
      });
    } catch (error) {
      console.error('Error updating todo:', error);
        res.status(500).send('Error updating todo:');
    }
});

/* complete task */
router.post('/complete', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('UPDATE todos SET completed = 1 WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error completing todo:', err);
          return res.status(500).send('Error completing todo');
        }
        console.log('Todo completed successfully:', results);
        // Redirect to the home page after update
        res.redirect('/');
      });
    } catch (error) {
      console.error('Error completing todo:', error);
        res.status(500).send('Error completing todo:');
    }
});

/* undo complete task */
router.post('/undo', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('UPDATE todos SET completed = 0 WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error uncompleting todo:', err);
          return res.status(500).send('Error uncompleting todo');
        }
        console.log('Todo uncompleted successfully:', results);
        // Redirect to the home page after update
        res.redirect('/');
      });
    } catch (error) {
      console.error('Error uncompleting todo:', error);
        res.status(500).send('Error uncompleting todo:');
    }
});

/* delete task */
router.post('/delete', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('DELETE FROM todos WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error deleting todo:', err);
          return res.status(500).send('Error deleting todo');
        }
        console.log('Todo deleted successfully:', results);
        // Redirect to the home page after deletion
        res.redirect('/');
      });
     } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).send('Error deleting todo:');
    }
});

module.exports = router;