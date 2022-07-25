import { Header } from '../../components/Header'
import github from '../../images/icons8-github.svg'
import { Img } from '../../components/Img'
import { Input } from '../../components/Input'
import { Ul } from '../../components/UnorderList'
import { List as Li } from '../../components/List'
import * as S from './styles/styles'
import { api } from '../../services'
import { GithubTypes } from '../../services/types/types'
import { useState, useEffect } from 'react'
import { Span } from '../../components/Span'
import Spinner from 'react-bootstrap/Spinner'
import { Anchor } from '../../components/Anchor'
import { Link } from 'react-router-dom'

export function Home() {

  const [avatar, setAvatar] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [bio, setBio] = useState<string>('')
  const [followers, setFollowers] = useState<number>(0)
  const [following, setFollowing] = useState<number>(0)
  const [location, setLocation] = useState<string>('')
  const [initialRepos, setInitialRepos] = useState<string[]>([])
  const [repos, setRepos] = useState<any[]>([])
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleGithubAPIRepos = async () => {
      try{
        
        const response = await fetch('https://api.github.com/users/LucasMiller98/repos')
        const data = await response.json()
        setInitialRepos(data)
        setRepos(data)

      }catch(error: any) {
        console.log(error.message)
      }
    }

    handleGithubAPIRepos()
  }, [])
  
  useEffect(() => {
    const handleGithubeAPIUser = async () => {
      const { data } = await api.get<GithubTypes>('/users/LucasMiller98')

      try{
        setAvatar(data.avatar_url)
        setName(data.name)
        setBio(data.bio)
        setLogin(data.login)
        setFollowers(data.followers)
        setFollowing(data.following)
        setLocation(data.location)
      }catch(error: any) {
        console.error(error.message)
      }
    }

    handleGithubeAPIUser()
  }, [])

  const handleChange = ({ target }: any) => {    
    if(!target.value) {
      setRepos(initialRepos)
      return
    }

    const filterRepos = repos.filter(({ name }) => name.includes(target.value))

    setRepos(filterRepos)
  } 

  return (
    <>
      <S.Page>
        <Header>
          <Img 
            className='img-github' 
            src={github} 
            alt='Github icon' />
          
          <Input 
            type='search' 
            className='input-search' 
            onChange={handleChange} 
            placeholder='Find a repository...'
          />

          <Ul>
            <Li><Anchor title='Street-Cep project(React and TypeScript)' target='_blank' href='https://github.com/LucasMiller98/street-cep'>Cep</Anchor></Li>
            <Li><Anchor title='Calculator Project(TypeScript)' target='_blank' href='https://github.com/LucasMiller98/Calculator-ts'>Calculator</Anchor></Li>
            <Li><Link to='/' title='Leave'>Leave</Link></Li>
          </Ul>

          { avatar ? (
            <Img 
              className='avatar-github' 
              alt='Avatar from Github' 
              src={avatar} 
            />

          ): (
            <Spinner animation='border' role='status' />
          )}
          
        </Header>

        <S.Div>
          { avatar ? (
            <Img src={avatar} alt='Profile' />
          ):(
            <Spinner animation='grow' role='status' />
          )}

          { name && login && bio ? (
            <>
              <Span className='span span-name'>{ name }</Span>
              <Span className='span span-login'>{ login }</Span>
              <Span className='span span-bio'>{ bio }</Span>
            </>
          ) :(
            <Spinner animation='grow' role='status' />
          )}

          <Anchor title='My profile' target='_blank' href='https://github.com/LucasMiller98'>Github profile</Anchor>

          { followers && following ? (
            <S.Container>
              <Span className='span span-followers'>{ followers } followers</Span>
              <Span className='span span-following'>{ following } following</Span>
            </S.Container>
          ) : (
            <Spinner animation='grow' role='status' />
          ) }

          { location ? (
            <Span className='span span-location'>{ location }</Span>
          ) : (
            <Spinner animation='grow' role='status' />
          ) }

          <Ul>
            { repos.map((repo, index) => (
              <Li key={index}>
                {repo.name}
              </Li>
            )) }
          </Ul>
          
        </S.Div>

      </S.Page>
    </>
  )
}
