import react from 'react';

function ProjectCards({title, description}) {
    return(
<div class="card shadow-sm">
  <div class="card-body">
    <h5> {title} </h5>
    <p>{description}</p>
  </div>
</div>
    )
}
export default ProjectCards;