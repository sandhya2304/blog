import React from 'react'

function Hero() {
    return (
        <div className="hero">
            <div class="jumbotron text-center">
  <h1>Company</h1> 
  <p>We specialize in blablabla</p> 
  <form class="form-inline">
    <div class="input-group">
      <input type="email" class="form-control" size="50" placeholder="Email Address" required />
      <div class="input-group-btn">
        <button type="button" class="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>
        </div>
    )
}

export default Hero
