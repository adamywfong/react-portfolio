export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
      <div class="form-group">
          <label for="inputName">Name</label>
          <input type="text" class="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="formControlTextarea">Enter your comment</label>
          <textarea class="form-control" id="formControlTextarea" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
