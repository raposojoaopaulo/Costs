function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Enter the Project name:" />
      </div>
      <div>
        <input type="number" placeholder="enter the total budget:" />
      </div>
      <div>
        <select name="category_id">
          <option>Select category</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Create Project" />
      </div>
    </form>
  )
}

export default ProjectForm