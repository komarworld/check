import './AboutProject.css'

function AboutProject() {
  return (
    <section className='about' id='about' aria-label='Информация о сроках и задачах'>
      <div className='about__container'>
        <h2 className='about__title'>
          О проекте
        </h2>
        <div className='about__text-container'>
          <article className='about__text-element'>
            <h3 className='about__text-element-title'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='about__text-element-message'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </article>
          <article className='about__text-element'>
            <h3 className='about__text-element-title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='about__text-element-message'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </div>
        <div className='about__timeline'>
            <p className='about__timeline-week about__timeline_left'>1 неделя</p>
            <p className='about__timeline-week about__timeline_right'>4 недели</p>
            <p className='about__timeline-caption about__timeline_back'>Back-end</p>
            <p className='about__timeline-caption about__timeline_front'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;