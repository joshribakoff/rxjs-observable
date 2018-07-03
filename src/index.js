import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

const myStream = Observable.create(observer => {
  console.log('a stream was kicked off')
  setTimeout(() => observer.next(1), 1000)
  setTimeout(() => observer.next(2), 2000)
  setTimeout(() => observer.error('an error'), 1200)
  setTimeout(() => observer.next(3), 3000)
  setTimeout(() => observer.complete(), 3000)
})

myStream
.pipe(map(value => value * 2))
.subscribe(
  nextValue => console.log(`the observable pushed next value ${nextValue}`),
  error => console.log(`the observable has an error of ${error}`),
  () => console.log(`the observable has completed`)
)